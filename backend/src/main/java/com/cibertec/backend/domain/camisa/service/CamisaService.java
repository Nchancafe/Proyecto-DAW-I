package com.cibertec.backend.domain.camisa.service;

import com.cibertec.backend.domain.camisa.model.CamisaModel;
import com.cibertec.backend.domain.camisa.valueobject.PaginaResult;
import com.cibertec.backend.domain.camisa.valueobject.PaginacionRequest;

public interface CamisaService {
    PaginaResult<CamisaModel> listarCamisas(PaginacionRequest paginacion);
}
