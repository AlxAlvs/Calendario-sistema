package sistema.calendario.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sistema.calendario.entities.Calendario;
import sistema.calendario.entities.Usuario;
import sistema.calendario.repositories.CalendarioRepository;
import sistema.calendario.repositories.UsuarioRepository;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

	@Autowired
	public UsuarioRepository usuarioRepository;
	
	@GetMapping
	public List<Usuario> getAll() {		
		return this.usuarioRepository.findAll();	
	}
	
	@PostMapping
	public void save(@RequestBody Usuario usuario) {
		this.usuarioRepository.save(usuario);
	}
}
