import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'

export async function GET(request) {
    // get supabase instance
    const supabase = createRouteHandlerClient({ cookies })

    // get current user session
    const { data: { session } } = await supabase.auth.getSession()

    // get all records and sort by experience
    const { data, error } = await supabase.from('Testimonials').select().order('created_at', { ascending: true })

    return NextResponse.json({ data, error })
}

export async function POST(request) {
    const testimonial = await request.json()

    // get supabase instance
    const supabase = createRouteHandlerClient({ cookies })

    // get current user session
    const { data: { session } } = await supabase.auth.getSession()

    // insert the data
    const { data, error } = await supabase.from('Testimonials')
        .insert({
            ...testimonial,
        })
        .select()
        .single()

    console.log(data, error)

    return NextResponse.json({ data, error })
}