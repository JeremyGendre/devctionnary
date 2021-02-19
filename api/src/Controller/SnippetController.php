<?php


namespace App\Controller;

use App\Entity\Snippet;
use App\Repository\SnippetRepository;
use App\Service\SnippetManager;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Serializer;
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
    * @Route("", name="snippets_add", methods={"POST"})
    */
    public function addSnippet(SnippetManager $snippetManager): JsonResponse
    {
        $snippet = $snippetManager->create();
        if (!$snippet) {
            return $this->errorJsonResponse("Erreur d'ajout du snippet");
        }
        $em = $this->getDoctrine()->getManager();
        $em->persist($snippet);
        $em->flush();
        return $this->successJsonResponse($snippet);
    }
}
