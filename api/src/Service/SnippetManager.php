<?php


namespace App\Service;

use App\Entity\Snippet;
use App\Entity\User;
use Exception;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Security;

class SnippetManager extends AbstractEntityManager implements EntityManagerInterface
{
    private $security;
    public function __construct(Security $security)
    {
        parent::__construct();
        $this->security = $security;
    }

    public function create()
    {
        if($this->isBadRequest()){
            return null;
        }

        $snippet = new Snippet();
        $snippet->setTitle($this->requestContent['title']);
        $snippet->setContent($this->requestContent['content']);
        $now = new \DateTime();
        $snippet->setCreatedAt($now);
        $snippet->setUpdatedAt($now);
        $snippet->setDescription($this->requestContent['description']??"");
        $snippet->setAuthor($this->security->getUser());
        return $snippet;
    }

    public function update()
    {
        if($this->isBadRequest()){
            return null;
        }

        $snippetId = $this->requestContent['id'];
        $snippet = $this->snippet->serialize();
        $snippet->setTitle($this->requestContent['title']);
        $snippet->setContent($this->requestContent['content']);
        $now = new \DateTime();
        $snippet->setUpdatedAt($now);
        $snippet->setDescription($this->requestContent['description']??"");
        $snippet->setAuthor($this->security->getUser());
        return $snippet;
    }

    /**
     * @return bool
     */
    public function isBadRequest(): bool
    {
        return !$this->requestContent['content']
            || !$this->requestContent['title'];
    }
}
