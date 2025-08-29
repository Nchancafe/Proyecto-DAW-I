package com.cibertec.backend.presentation.camisa.dto;

import java.math.BigDecimal;

public record CamisaResponseDto(
        Integer id_camisa,
        String  descripcion,
        Integer id_marca,
        String  color,
        String  talla,
        String  manga,
        Integer stock,
        BigDecimal precio_costo,
        BigDecimal precio_venta,
        Integer id_estante,
        Boolean estado
) {}