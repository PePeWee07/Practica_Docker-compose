package com.pee.dockerisez.postgresql.user;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

  @Autowired
  private UserRepository userRepository;

  @GetMapping
  public List<User> getAllUsers() {
    return userRepository.findAll();
  } 

  @GetMapping("/{id}")
  public User getUserById(@PathVariable Long id) {
    System.out.println("Consultando ID: " + id + "...");
    return userRepository.findById(id).orElse(null);
    //return userRepository.findById(id).get();
  }

  @PostMapping
  public User createUser(@RequestBody User user) {
    return userRepository.save(user);
  }
  
   @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        try {
            return userRepository.findById(id)
                    .map(user -> {
                        userRepository.delete(user);
                        return ResponseEntity.ok().build();
                    }).orElse(ResponseEntity.notFound().build());
        } catch (DataAccessException e) {
            response.put("mensaje", "No se encontró ningún usuario con el ID proporcionado :(.");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

  
} 