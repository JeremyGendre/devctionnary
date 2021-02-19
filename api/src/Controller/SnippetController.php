<?php


namespace App\Controller;

use App\Entity\Snippet;
use App\Repository\SnippetRepository;
use App\Service\SnippetManager;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/snippets")
 */

class SnippetController extends BaseAbstractController
{
    /**
    * @Route("", name="snippets_get_all", methods={"GET"})
    */
    public function getAll(SnippetRepository $snippetRepository, SerializerInterface $serializer)
    {
        $snippets = $snippetRepository->findAll();
        
        //var_dump($snippets);
        //return $snippets;
        return $this->successJsonResponse($serializer->serialize($snippets,"json"));
    }

    

    /**
     * @Route("", name="snippet_add", methods={"POST"})
     */
    public function addSnippet(SnippetManager $snippetManager): JsonResponse 
    {
        $snippet = $snippetManager->create();

        if (!$snippet)
        {
            return $this->errorJsonResponse("Erreur d'ajout du snippet");
        }

        $em = $this->getDoctrine()->getManager();
        $em->persist($snippet);
        $em->flush();
        return $this->successJsonResponse($snippet);
    }


    /**
    * @Route("/{id}", name="snippets_get_one", methods={"GET"})
    */
    public function getOneSnippet( Snippet $snippet, SerializerInterface $serializer)
    {   
        return $this->successJsonResponse($serializer->serialize($snippet,"json"));
    }
}
