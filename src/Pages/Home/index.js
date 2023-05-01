import SearchAppBar from "../../components/NavBar/NavBar";
import Cover from "../../components/Cover";
import Product from "../../components/Products/Product";

function Home() {
    return (
        <div className="Home">
            <SearchAppBar />
            <Cover />
            <Product />
        </div>
    );
}
export default Home;
