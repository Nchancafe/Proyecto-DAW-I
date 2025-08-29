package com.cibertec.backend.presentation.camisa.controller;

import com.cibertec.backend.domain.camisa.model.CamisaXMarcaDTO;
import com.cibertec.backend.domain.camisa.model.StockBajoDTO;
import com.cibertec.backend.domain.camisa.service.CamisaService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {
    private final CamisaService camisaService;

    public DashboardController(CamisaService camisaService) {
        this.camisaService = camisaService;
    }

    @GetMapping("/camisas-por-marca")
    public List<CamisaXMarcaDTO> getCamisaXMarca(){
        return camisaService.obtenerTotalPorMarca();
    }

    @GetMapping("/stock-bajo")
    public List<StockBajoDTO> getStockBajo(){
        return camisaService.obtenerMarcasConStockBajo();
    }
}
