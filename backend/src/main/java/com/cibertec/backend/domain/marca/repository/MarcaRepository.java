package com.cibertec.backend.domain.marca.repository;

import com.cibertec.backend.domain.marca.valueobject.PaginaResult;
import com.cibertec.backend.domain.marca.valueobject.PaginacionRequest;
import com.cibertec.backend.domain.marca.model.MarcaModel;

public interface MarcaRepository {
    PaginaResult<MarcaModel> listarMarcas(PaginacionRequest paginacion);

}
