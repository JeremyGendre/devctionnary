<?php


namespace App\Controller;

use App\Entity\Snippet;
use App\Repository\SnippetRepository;
use App\Service\Serializer\Serializer;
use App\Service\SnippetManager;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
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
     * @param SnippetRepository $snippetRepository
     * @param SerializerInterface $serializer
     * @return JsonResponse
     * @throws Exception
     */
    public function getAll(SnippetRepository $snippetRepository, SerializerInterface $serializer): JsonResponse
    {
        $snippets = $snippetRepository->findAll();
        return $this->successJsonResponse(Serializer::serializeMany($snippets));
    }


    /**
     * @IsGranted("ROLE_USER")
     * @Route("", name="snippet_add", methods={"POST"})
     * @param SnippetManager $snippetManager
     * @return JsonResponse
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

    /**
     * @IsGranted("ROLE_USER")
     * @Route("/{id}", name="snippet_update", methods={"POST"})
     * @param SnippetManager $snippetManager
     * @return JsonResponse
     */
    public function updateSnippet(Snippet $snippet, SnippetManager $snippetManager): JsonResponse
    {
        
        if (!$snippet) {
            return $this->errorJsonResponse("Erreur de modification du snippet");
        }
        $snippet = $snippetManager->update($snippet);
        $em = $this->getDoctrine()->getManager();
        $em->flush();
        return $this->successJsonResponse($snippet);
    }

    /**
     * @Route("/{id}", name="snippets_get_one", methods={"GET"})
     * @param Snippet $snippet
     * @param SerializerInterface $serializer
     * @return JsonResponse
     */
    public function getOneSnippet( Snippet $snippet, SerializerInterface $serializer): JsonResponse
    {
        return $this->successJsonResponse($snippet->serialize());
    }
}
