'use client'
export function SomeComponent({message}) {
    return (
        <div>
            THIS IS SOME client COMPONENT with the message from the server component in it: 
            <span className="text-red-900">
            {message.message}
            </span>
        </div>
    )
}