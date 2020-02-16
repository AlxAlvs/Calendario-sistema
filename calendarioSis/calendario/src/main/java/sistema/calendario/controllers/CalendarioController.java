package sistema.calendario.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sistema.calendario.entities.Calendario;
import sistema.calendario.repositories.CalendarioRepository;

@RestController
@RequestMapping("/calendarios")
public class CalendarioController {
	
	@Autowired
	public CalendarioRepository calendarioRepository;
	
	@GetMapping
	public List<Calendario> getAll() {		
		return this.calendarioRepository.findAll();	
	}
	
	@PostMapping
	public void saveUser(@RequestBody Calendario calendario) {
		this.calendarioRepository.save(calendario);
	}
	
	@PutMapping("/{id}")
	public void changeUser(@PathVariable("id") Integer id, @RequestBody Calendario calendario) {
		calendario.setId(id);
		this.calendarioRepository.save(calendario);
	}
	
	@DeleteMapping("/{id}")
	public void excludeUser(@PathVariable("id") Integer id) {
		this.calendarioRepository.deleteById(id);
	}
}
