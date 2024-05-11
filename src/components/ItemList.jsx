import {Item} from './Item';


export const ItemList = ({ products}) => {
    return(
                <div class="container">
                    <div class="flex flex-wrap justify-center">
                    {products.map((product) => (
                        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 dark:bg-gray-900 m-3 flex justify-center">
                            <Item key={product.id} product={product}/>
                        </div>
                    ))}
                    </div>
                </div>
    );
}; 