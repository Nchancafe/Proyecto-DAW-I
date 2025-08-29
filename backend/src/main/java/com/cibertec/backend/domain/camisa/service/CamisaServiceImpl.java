package com.cibertec.backend.domain.camisa.service;

import com.cibertec.backend.domain.camisa.model.CamisaModel;
import com.cibertec.backend.domain.camisa.repository.CamisaRepository;
import com.cibertec.backend.domain.camisa.valueobject.CamisaCreateCommand;
import com.cibertec.backend.domain.camisa.valueobject.PaginaResult;
import com.cibertec.backend.domain.camisa.valueobject.PaginacionRequest;
import com.cibertec.backend.domain.camisa.service.CamisaServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CamisaServiceImpl implements CamisaService {

    private final CamisaRepository camisaRepository;

    @Override
    public PaginaResult<CamisaModel> listarCamisas(PaginacionRequest paginacion) {
        return camisaRepository.listarCamisas(paginacion);
    }

//    @Override
//    public CamisaModel crearCamisa(CamisaCreateCommand command, String usuario) {
//                // alineandolo al front
//                        if (command.precio_venta().compareTo(command.precio_costo()) < 0) {
//                        throw new IllegalArgumentException("El precio de venta no puede ser menor al costo.");
//                    }
//                return camisaRepository.crearCamisa(command, usuario);
//            }

}
