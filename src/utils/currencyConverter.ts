const currencyConverter = (currency: number) =>
    Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
    }).format(currency)

export default currencyConverter
