package com.cibertec.backend.infrastructure.shared.constant;

import lombok.NoArgsConstructor;

import static lombok.AccessLevel.PRIVATE;

@NoArgsConstructor(access = PRIVATE)
public class ErrorConstant {
    public static final String ERROR_LOGIN = "error.login";
    public static final String ERROR_SAVE = "error.save";
    public static final String ERROR_UPDATE = "error.update";
    public static final String ERROR_DELETE = "error.delete";
    public static final String ERROR_FIND = "error.find";
    public static final String ERROR_DEMO = "error.demo";
    public static final String ERROR_EMPLEADO_DOCUMENTO_EXIST = "error.empleado.documento.exist";
}