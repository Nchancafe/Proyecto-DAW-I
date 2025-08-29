package com.cibertec.backend.domain.camisa.valueobject;

import lombok.*;

@Value
@Builder
public class PaginacionRequest {
    @Builder.Default
    int pagina = 0;
    @Builder.Default
    int tamanio = 10;
    @Builder.Default
    String ordenarPor = "id_camisa";
    @Builder.Default
    String direccion = "asc";

    public boolean isAscendente() {
        return "asc".equalsIgnoreCase(direccion);
    }
}
