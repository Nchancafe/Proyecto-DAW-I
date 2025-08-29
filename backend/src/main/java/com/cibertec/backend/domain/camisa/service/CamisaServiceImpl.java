package com.cibertec.backend.domain.camisa.service;

import com.cibertec.backend.domain.camisa.model.CamisaModel;
import com.cibertec.backend.domain.camisa.model.CamisaXMarcaDTO;
import com.cibertec.backend.domain.camisa.model.StockBajoDTO;
import com.cibertec.backend.domain.camisa.repository.CamisaRepository;
import com.cibertec.backend.domain.camisa.valueobject.PaginaResult;
import com.cibertec.backend.domain.camisa.valueobject.PaginacionRequest;
import com.cibertec.backend.infrastructure.persistence.camisa.jpa.CamisaRepositoryJpa;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CamisaServiceImpl implements CamisaService {

    private final CamisaRepository camisaRepository;
    private final CamisaRepositoryJpa  camisaRepositoryJpa;


    @Override
    public PaginaResult<CamisaModel> listarCamisas(PaginacionRequest paginacion) {
        return camisaRepository.listarCamisas(paginacion);
    }

    @Override
    public List<CamisaXMarcaDTO> obtenerTotalPorMarca() {
        return camisaRepositoryJpa.totalPorMarca();
    }

    @Override
    public List<StockBajoDTO> obtenerMarcasConStockBajo() {
        return camisaRepositoryJpa.marcasConStockBajo();
    }


}
