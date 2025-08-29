package com.cibertec.backend.domain.camisa.repository;

import com.cibertec.backend.domain.camisa.model.CamisaModel;
import com.cibertec.backend.domain.camisa.valueobject.CamisaCreateCommand;
import com.cibertec.backend.domain.camisa.valueobject.PaginaResult;
import com.cibertec.backend.domain.camisa.valueobject.PaginacionRequest;


public interface CamisaRepository {
    PaginaResult<CamisaModel> listarCamisas(PaginacionRequest paginacion);
   // CamisaModel crearCamisa(CamisaCreateCommand command, String usuario);

}
