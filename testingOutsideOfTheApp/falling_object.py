import random
import pygame 
import sys

pygame.init()

screen_width = 800
screen_height = 600

screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption("Object Drop")

# Define colors
WHITE = (255, 255, 255)
RED = (255, 0, 0)

class DropObject:
    def __init__(self, x, y, width, height):
        self.rect = pygame.Rect(x, y, width, height)
        self.speed = 2
    
    def update(self):
        self.rect.y += self.speed
        if self.rect.y > screen_height:
            self.rect.y = 0
            self.rect.x = random.randint(0, screen_width - self.rect.width)


    def move(self, dx):
        self.rect.x += dx
        
        if self.rect.x < 0:
            self.rect.x =0
        elif self.rect.x > screen_width - self.rect.width:
            self.rect.x = screen_width - self.rect.width

    def draw(self, screen):
        pygame.draw.rect(screen, RED, self.rect)


def main():
    clock = pygame.time.Clock()
    
    drop_object = DropObject(x=400, y=0, width=50, height=50)
    
    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
        
        keys = pygame.key.get_pressed()
        if keys[pygame.K_LEFT]:
            drop_object.move(-5)
        if keys[pygame.K_RIGHT]:
            drop_object.move(5)
        drop_object.update()
        
        screen.fill(WHITE)
        
        drop_object.draw(screen)
        
        pygame.display.flip()
        
        clock.tick(60)

if __name__ == "__main__":
    main()