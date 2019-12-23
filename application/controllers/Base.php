<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Base extends CI_Controller {
 public function __construct()
    {
            parent::__construct();
            $this->load->helper('url');
    }
  public function index(){
    $this->other();
  }

  public function other($page = 'index')
    {

        if ( ! file_exists(APPPATH.'views/'.$page.'.php'))
        {
                // Whoops, we don't have a page for that!
                show_404();
                return;
        }
        $this->load->view('template/navigation.php');
        $this->load->view($page);

    }
}
