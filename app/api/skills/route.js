import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'

export async function GET(request) {
    // get supabase instance
    const supabase = createRouteHandlerClient({ cookies })

    // get current user session
    const { data: { session } } = await supabase.auth.getSession()

    // get all records and sort by experience
    const { data, error } = await supabase.from('Skills').select().order('experience', { ascending: true })

    return NextResponse.json({ data, error })
}

export async function POST(request) {
    const skill = await request.json()

    // get supabase instance
    const supabase = createRouteHandlerClient({ cookies })

    // get current user session
    const { data: { session } } = await supabase.auth.getSession()

    // insert the data
    const { data, error } = await supabase.from('Skills')
        .insert({
            ...skill,
        })
        .select()
        .single()

    return NextResponse.json({ data, error })
}


