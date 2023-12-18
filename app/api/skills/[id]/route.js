import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'

export async function PATCH(request, { params }) {

    // get id from params
    const id = params.id

    // get supabase instance
    const supabase = createRouteHandlerClient({ cookies })

    // get current user session
    const { data: { session } } = await supabase.auth.getSession()

    const endorsement = await request.json()

    const skill = await supabase.from('Skills')
        .select()
        .eq('id', id)
        .single()

    // If there are no endorsements yet, create an empty array
    if (!skill.data.endorsement_name && !skill.data.endorsement_message) {
        skill.data.endorsement_name = []
        skill.data.endorsement_message = []
    }

    // If the endorsement already exists, return an error
    if (skill.data.endorsement_name.includes(endorsement.name)) {
        return NextResponse.error({
            status: 400,
            message: 'You have already endorsed this skill',
        })
    }

    const { data, error } = await supabase.from('Skills')
        .update({
            ...skill.data,
            endorsement_name: [...skill.data.endorsement_name, endorsement.name],
            endorsement_message: [...skill.data.endorsement_message, endorsement.message],
        })
        .eq('id', id)
        .select()
        .single()

    return NextResponse.json({ error })
}