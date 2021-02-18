<?php


namespace App\Controller;

use App\Entity\Snippet;
use App\Repository\SnippetRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;


/**
 * @Route("/api/snippets")
 */

class SnippetController extends BaseAbstractController
{
    /**
    * @Route("", name="snippets_get_all", methods={"GET"})
    */
    public function getAll(SnippetRepository $snippetRepository): JsonResponse
    {
        $snippets = $snippetRepository->findAll();
        
        return $this->successJsonResponse($snippets);
    }

    /**
     * @Route("", name="snippet_add", methods={"POST"})
     */
    public function addSnippet(Request $request): JsonResponse 
    {
        $snippet = new Snippet();

        $em = $this->getDoctrine()->getManager();
        $em->persist($snippet);
        $em->flush();
        return $this->successJsonResponse($snippet);
    }
}
