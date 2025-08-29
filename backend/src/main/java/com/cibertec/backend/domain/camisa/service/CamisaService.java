package com.cibertec.backend.domain.camisa.service;

import com.cibertec.backend.domain.camisa.model.CamisaModel;
import com.cibertec.backend.domain.camisa.valueobject.CamisaCreateCommand;
import com.cibertec.backend.domain.camisa.model.CamisaXMarcaDTO;
import com.cibertec.backend.domain.camisa.model.StockBajoDTO;
import com.cibertec.backend.domain.camisa.valueobject.PaginaResult;
import com.cibertec.backend.domain.camisa.valueobject.PaginacionRequest;

import java.util.List;

public interface CamisaService {
    PaginaResult<CamisaModel> listarCamisas(PaginacionRequest paginacion);

   // CamisaModel crearCamisa(CamisaCreateCommand command, String usuario);

    List<CamisaXMarcaDTO> obtenerTotalPorMarca();
    List<StockBajoDTO> obtenerMarcasConStockBajo();

}
