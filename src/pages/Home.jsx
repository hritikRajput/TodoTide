import "./Home.css"
const Home = () => {
    return (
        <div className="home-container">
            <h1>TodoTide</h1>
            <div className="user-details">
                <span className="text-lr">Hello, what&apos;s your name?</span>
                <form action="">
                    <input type="text" />
                </form>
            </div>
        </div>
    )
}

export default Home
