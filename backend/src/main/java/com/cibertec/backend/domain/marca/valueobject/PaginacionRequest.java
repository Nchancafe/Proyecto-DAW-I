package com.cibertec.backend.domain.marca.valueobject;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class PaginacionRequest {
    @Builder.Default
    int pagina = 0;
    @Builder.Default
    int tamanio = 10;
    @Builder.Default
    String ordenarPor = "id_marca";
    @Builder.Default
    String direccion = "asc";

    public boolean isAscendente() {
        return "asc".equalsIgnoreCase(direccion);
    }
}
