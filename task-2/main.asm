section .data
	; constnts
	hello: db "Hello, Mom!", 10
	helloLen: equ $-hello ; length of string


section .text
	global start ; entry point for linter

	_start:
		mov rax, 1 ; sys_write
		mov rdi, 1 ; stdout
		mov rsi, hello ; selection
		mov rdx, helloLen ; length of string
		syscall
		; end of program
		mov rax, 60 ; sys_exit
		mov rdi, 0 ; exit code
		syscall
