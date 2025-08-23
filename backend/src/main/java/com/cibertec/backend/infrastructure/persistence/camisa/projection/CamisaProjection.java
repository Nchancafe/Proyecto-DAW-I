package com.cibertec.backend.infrastructure.persistence.camisa.projection;

import java.math.BigDecimal;

public interface CamisaProjection {

    Long getId();

    String getDescripcion();

    Long getMarcaId();

    String getMarca();

    String getColor();

    String getTalla();

    String getManga();

    Integer getStock();

    BigDecimal getPrecioCosto();

    BigDecimal getPrecioVenta();

    Long getEstanteId();

    String getEstante();

    Boolean getEstado();
}
