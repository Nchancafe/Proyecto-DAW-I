package com.cibertec.backend.domain.camisa.model;

public class CamisaXMarcaDTO {
    private String nombre;
    private Long total;

    public CamisaXMarcaDTO(String nombre, Long total) {
        this.nombre = nombre;
        this.total = total;
    }

    public String getNombre() {return nombre;}
    public Long getTotal() {return total;}
}
