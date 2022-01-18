import { Div, Button, Img, P, Title } from "./style";

const Product = ({ product, handleClick}) => {
  return (
    <Div>
      <Title>{product.title}</Title>
      <Img src={product.image} alt={product.name} />
      <P>{product.description}</P>
      <span>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(product.price)}
      </span>
      <Button onClick={handleClick}>Adicionar ao carrinho</Button>
    </Div>
  );
};
export default Product;