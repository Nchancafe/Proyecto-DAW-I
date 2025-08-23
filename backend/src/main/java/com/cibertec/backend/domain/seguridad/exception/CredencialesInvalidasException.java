package com.cibertec.backend.domain.seguridad.exception;

public class CredencialesInvalidasException extends DominioException {
    public CredencialesInvalidasException(String mensaje) {
        super(mensaje);
    }
}
