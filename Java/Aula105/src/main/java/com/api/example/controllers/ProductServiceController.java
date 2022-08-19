package com.api.example.controllers;

import java.util.ArrayList;
import java.util.List;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.api.example.models.Cart;
import com.api.example.models.Product;

/**
 * Endpoints da API REST para manipular a classe Product
 * <p>
 * 1 - POST: criar um novo produto
 * 2 - GET: buscar um produto
 * 3 - GET: listar produtos
 * 4 - PUT: atualizar um produto
 * 5 - DELETE: remover um produto
 */

@RestController
@Api(value = "API para manutenção de produtos")
@CrossOrigin(origins = "*")

public class ProductServiceController {

    private static List<Product> products = new ArrayList<Product>();

    static {

        products.add(new Product(0, "Shampoo Canino", 35.00, "Shampoo para cachorro gourmet"));
        products.add(new Product(1, "Shampoo Felino", 38.00, "Shampoo para gato gourmet"));
        products.add(new Product(2, "Bolinha de borracha", 15.00, "Brinquedo para cachorro"));
        products.add(new Product(3, "Remédio Canino", 30.00, "Remédio para cachorro nutella"));
        products.add(new Product(4, "Roupinha de cachorro", 105.00, "Roupinha de cachorro friorento"));

    }


    //Buscando um novo produto por ID
    @ApiOperation(value = "Buscar um novo produto por ID")
    @RequestMapping(value = "/products/{id}", method = RequestMethod.GET)
    public ResponseEntity<Object> getProductById(@PathVariable("id") int id) {

        return new ResponseEntity<>(products.get(id), HttpStatus.OK);

    }
    // Adicionando um novo produto por ID
    @ApiOperation(value = "Adicionar um novo produto")
    @RequestMapping(value = "/products", method = RequestMethod.POST, produces = "application/json", consumes = "application/json")
    public ResponseEntity<Object> createProduct(@RequestBody Product product) {

        System.out.println("---------> Product: ");
        System.out.println(product);

        products.add(product);
        return new ResponseEntity<>("Produto inserido com sucesso!", HttpStatus.OK);

    }

    //Listando todos os produtos
    @ApiOperation(value = "Listar todos os produtos")
    @RequestMapping(value = "/products", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<Object> getProducts() {
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    //Atualizando um produto por ID
    @ApiOperation(value = "Atualizar um produto")
    @RequestMapping(value = "/products/{id}", method = RequestMethod.PUT, produces = "application/json", consumes = "application/json")
    public ResponseEntity<Object> updateProduct(@PathVariable("id") int id, @RequestBody Product product) {

        products.remove(id);
        product.setId(id);
        products.add(product);

        return new ResponseEntity<>("Produto atualizado com sucesso!", HttpStatus.OK);

    }

    //Removendo um produto por ID
    @ApiOperation(value = "Remover um produto")
    @RequestMapping(value = "/products/{id}", method = RequestMethod.DELETE, produces = "application/json")
    public ResponseEntity<Object> deleteProduct(@PathVariable("id") int id) {

        products.remove(id);
        return new ResponseEntity<>("Produto removido com sucesso!", HttpStatus.OK);

    }
    // Criando um novo carrinho
    @ApiOperation(value = "criar um novo carrinho")
    @RequestMapping(value = "/carts", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<Object> createCart(@RequestBody int id) {
        Cart cart = new Cart(id);
        return new ResponseEntity<>(cart, HttpStatus.OK);





    }

}
