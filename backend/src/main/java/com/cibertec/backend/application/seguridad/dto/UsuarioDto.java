package com.cibertec.backend.application.seguridad.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.Builder;

@Getter
@Setter
@Builder
public class UsuarioDto {
    private String username;
    private String email;
    private String nombre;
    private String apellido;
}
