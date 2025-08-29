package com.cibertec.backend.domain.camisa.model;

public class StockBajoDTO {
    private String marca;
    private Long stock;

    public StockBajoDTO(String marca, Long stock) {
        this.marca = marca;
        this.stock = stock;
    }

    public String getMarca() { return  marca;}
    public Long getStock() { return  stock;}
}
