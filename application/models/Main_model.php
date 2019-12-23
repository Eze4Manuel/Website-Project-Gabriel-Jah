<?php

class Main_model extends CI_Model
{


    function insert_book($data){
      $this->db->insert("bookings", $data);
    }


    function getprice(){
          $query = $this->db->get('bookings');
          return $query;
                }


    function fetch_data(){
          $query = $this->db->get('produce');
          return $query;
        }


    function can_login($username, $password){
      $this->db->where('username', $username);
      $this->db->where('password', $password);

      $query=$this->db->get('user');
      //SELECT * FROM users WHERE username= '$username' AND
      //password= '$password'

      if($query->num_rows() > 0)
      {
        return true;
      }else{
        return false;
      }




    }

}
