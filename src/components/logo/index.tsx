import  bag  from "../../imgs/shopping-bag.svg"
import  dots  from "../../imgs/Group135.svg"

export const Logo = () =>{
    return (
        <section>
            <div>
                <h1>Burger</h1>
                <h2>Kenzie</h2>
            </div>
            <div>
                <img src={bag} alt="Bag" />
                <span>A vida é como um sanduíche, é preciso recheá-la com os <span> melhores</span> ingredientes.</span>
            </div>
            <img src={dots} alt="dots" />
        </section>
    )
}