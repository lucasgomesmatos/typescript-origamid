function abortar(message: string): never {
    throw new Error(message)
}

abortar('Error critico... linha 1')
