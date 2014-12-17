## Towers of Hanoi

Recursive approach using nodejs (javascript) with a Mediator Pattern. 

### Requerimients

    nodejs
    mocha (npm)
    chai  (npm)

### Recursive solution

The recursive function that takes as a parameter the disk that is the largest disk in the tower we want to move. Our function will also take three parameters indicating from which peg the tower should be moved (source), to which peg it should go (dest), and the other peg, which we can use temporarily to make this happen (spare).

FUNCTION MoveTower(disk, source, dest, spare):
IF disk == 0, THEN:
    move disk from source to dest
ELSE:
    MoveTower(disk - 1, source, spare, dest)   // Step 1 above
    move disk from source to dest              // Step 2 above
    MoveTower(disk - 1, spare, dest, source)   // Step 3 above
END IF
