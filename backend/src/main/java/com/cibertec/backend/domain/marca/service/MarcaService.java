// domain/marca/MarcaService.java
import com.cibertec.backend.domain.marca.model.MarcaModel;

import java.util.List;

public interface MarcaService {
    List<MarcaModel> listar();
    MarcaModel crear(MarcaModel m);
}
    