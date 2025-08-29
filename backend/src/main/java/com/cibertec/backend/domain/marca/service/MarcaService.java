package com.cibertec.backend.domain.marca.service;

import com.cibertec.backend.domain.marca.valueobject.PaginaResult;
import com.cibertec.backend.domain.marca.valueobject.PaginacionRequest;
import com.cibertec.backend.domain.marca.model.MarcaModel;

public interface MarcaService {
    PaginaResult<MarcaModel> listarMarcas(PaginacionRequest paginacion);
}
