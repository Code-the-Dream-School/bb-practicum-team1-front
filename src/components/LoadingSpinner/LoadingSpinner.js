import './LoadingSpinner.scss'

const LoadingSpinner = ({ loading }) => {
    if (!loading) return null

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
