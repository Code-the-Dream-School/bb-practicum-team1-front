import './LoadingSpinner.scss'

const LoadingSpinner = () => {
    return (
        <div className="container__for__container">
            <div className="book__container">
                <div className="book">
                    <div className="book__page"></div>
                    <div className="book__page"></div>
                    <div className="book__page"></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingSpinner

// const [quote, setQuote] = useState({})

// const getRandomQuote = () => {
//     setLoading(true)
//     setTimeout(() => {
//         fetch('https://api.quotable.io/random')
//             .then((res) => res.json())
//             .then((data) => {
//                 setLoading(false)
//                 setQuote(data)
//             })
//     }, 5000)
// }
