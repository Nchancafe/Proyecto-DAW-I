package com.cibertec.backend.presentation.camisa.dto;

import jakarta.validation.constraints.*;
import java.math.BigDecimal;

public record CamisaRequestDto(
        @NotBlank @Size(max=45) String descripcion,
        @NotNull Integer id_marca,
        @NotBlank @Size(max=45) String color,
        @NotBlank @Size(max=10) String talla,
        @NotBlank @Size(max=10) String manga,
        @NotNull @Min(0) Integer stock,
        @NotNull @DecimalMin("0.00") BigDecimal precio_costo,
        @NotNull @DecimalMin("0.00") BigDecimal precio_venta,
        @NotNull Integer id_estante,
        @NotNull Boolean estado
) {}