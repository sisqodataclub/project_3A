import os
import subprocess

def run_command(command):
    try:
        subprocess.run(command, check=True, shell=True)
    except subprocess.CalledProcessError as e:
        print(f"❌ Error while running command: {command}")
        print(e)
        exit(1)

def main():
    folder_path = input("📁 Enter the full path to your project folder: ").strip()
    if not os.path.isdir(folder_path):
        print("❌ That path does not exist or is not a folder.")
        return

    repo_url = input("🔗 Enter your GitHub repository URL (HTTPS): ").strip()
    if not repo_url.startswith("https://github.com/"):
        print("❌ Please enter a valid GitHub HTTPS URL.")
        return

    os.chdir(folder_path)
    print(f"📂 Changed directory to: {folder_path}\n")

    # Initialize git if not already a repo
    if not os.path.isdir(os.path.join(folder_path, ".git")):
        run_command("git init")

    # Check if 'origin' remote exists and remove it if so
    check_remote = subprocess.run("git remote", shell=True, capture_output=True, text=True)
    if "origin" in check_remote.stdout:
        run_command("git remote remove origin")

    run_command(f"git remote add origin {repo_url}")

    # Stage all files
    run_command("git add .")

    # Commit only if there are changes
    status_result = subprocess.run("git status --porcelain", shell=True, capture_output=True, text=True)
    if status_result.stdout.strip():
        run_command('git commit -m "Initial commit"')
    else:
        print("⚠️ No changes to commit.")

    # Push to GitHub
    run_command("git branch -M main")
    run_command("git push -u origin main --force")

    print("\n✅ Project folder successfully pushed to GitHub!")

if __name__ == "__main__":
    main()
