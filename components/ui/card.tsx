interface CardProps {
    title: string
    value: string | number
    description?: string
    className?: string
}

export function Card({ title, value, description, className = "" }: CardProps) {
    return (
        <div className={`bg-white overflow-hidden shadow rounded-lg ${className}`}>
            <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">{value}</dd>
                {description && (
                    <dd className="mt-1 text-sm text-gray-600">{description}</dd>
                )}
            </div>
        </div>
    )
}
