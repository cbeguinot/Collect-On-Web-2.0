<?php

namespace Commun\VitrineBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function accueilAction()
    {
        return $this->render('CommunVitrineBundle:Vitrine:accueil.html.twig');
    }
}
