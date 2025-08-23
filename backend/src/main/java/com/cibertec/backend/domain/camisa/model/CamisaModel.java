package com.cibertec.backend.domain.camisa.model;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class CamisaModel {
    private Long camisaId;
    private String descripcion;
    private Long marcaId;
    private String marca;
    private String color;
    private String talla;
    private String manga;
    private Integer stock;
    private BigDecimal precioCosto;
    private BigDecimal precioVenta;
    private Long estanteId;
    private String estante;
    private Boolean estado;
}
