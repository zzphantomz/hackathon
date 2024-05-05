
const size = (value:string) => {
    return value ? value.length : 0
}

export default function splitAddress(address: string|null) {
        if (address) {
            return (
                address.substring(0,  4 ) +
                ('...') +
                address.substring(size(address) -  4, size(address))
            )
        } else {
            return ''
        }
}
