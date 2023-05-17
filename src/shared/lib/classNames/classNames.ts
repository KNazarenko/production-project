type Nods = Record<string, boolean | string>

export function classNames(cls: string, nods: Nods, additional: string[]): string {
    return [
        cls,
        ...additional,
        ...Object.entries(nods)
            .filter(([key, value]) => Boolean(value))
            .map(([key]) => key)
    ]
    .join(' ');
}