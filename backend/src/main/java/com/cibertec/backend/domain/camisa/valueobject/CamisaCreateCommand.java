package com.cibertec.backend.domain.camisa.valueobject;

import java.math.BigDecimal;

public record CamisaCreateCommand(
        String descripcion,
        Integer id_marca,
        String color,
        String talla,
        String manga,
        Integer stock,
        BigDecimal precio_costo,
        BigDecimal precio_venta,
        Integer id_estante,
        Boolean estado
) { }
