<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210217092135 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE snippet (id INT AUTO_INCREMENT NOT NULL, author_id INT NOT NULL, title VARCHAR(255) NOT NULL, content LONGTEXT NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, description VARCHAR(255) DEFAULT NULL, INDEX IDX_961C8CD5F675F31B (author_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE snippet_validation (id INT AUTO_INCREMENT NOT NULL, snippet_id INT NOT NULL, validator_id INT NOT NULL, validated TINYINT(1) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, message VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_54CD0A736E34B975 (snippet_id), INDEX IDX_54CD0A73B0644AEC (validator_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, biography LONGTEXT DEFAULT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, UNIQUE INDEX UNIQ_8D93D649F85E0677 (username), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE vote (id INT AUTO_INCREMENT NOT NULL, voter_id INT NOT NULL, snippet_id INT NOT NULL, rating INT NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, INDEX IDX_5A108564EBB4B8AD (voter_id), INDEX IDX_5A1085646E34B975 (snippet_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE snippet ADD CONSTRAINT FK_961C8CD5F675F31B FOREIGN KEY (author_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE snippet_validation ADD CONSTRAINT FK_54CD0A736E34B975 FOREIGN KEY (snippet_id) REFERENCES snippet (id)');
        $this->addSql('ALTER TABLE snippet_validation ADD CONSTRAINT FK_54CD0A73B0644AEC FOREIGN KEY (validator_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE vote ADD CONSTRAINT FK_5A108564EBB4B8AD FOREIGN KEY (voter_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE vote ADD CONSTRAINT FK_5A1085646E34B975 FOREIGN KEY (snippet_id) REFERENCES snippet (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE snippet_validation DROP FOREIGN KEY FK_54CD0A736E34B975');
        $this->addSql('ALTER TABLE vote DROP FOREIGN KEY FK_5A1085646E34B975');
        $this->addSql('ALTER TABLE snippet DROP FOREIGN KEY FK_961C8CD5F675F31B');
        $this->addSql('ALTER TABLE snippet_validation DROP FOREIGN KEY FK_54CD0A73B0644AEC');
        $this->addSql('ALTER TABLE vote DROP FOREIGN KEY FK_5A108564EBB4B8AD');
        $this->addSql('DROP TABLE snippet');
        $this->addSql('DROP TABLE snippet_validation');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE vote');
    }
}
